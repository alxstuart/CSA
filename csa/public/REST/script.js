$(function() {
			var logInUser = 'admin'; //global variable for admin login
			var logInPassword = 'taliesin'; //global variable for admin login
			var urlBroadcasts = 'http://localhost:3000/broadcasts.json';
			var urlUsers = 'http://localhost:3000/users.json';
			hash = btoa(logInUser + ":" + logInPassword);

			$('#loginBtn').click(function(e) {
				console.log()
			});

			$('#getusers').click(function(e) { //when user button clicked
				$('#users').empty(); //make user div empty to stop redownloading same info (can be reused for pagination)
				var tr = "<tr><th>Firstname</th><th>Surname</th><th>email</th></tr>"; //begin creating table
				$('#users').append(tr) //table row 
				e.preventDefault();
				$.ajax({
					url: urlUsers,
					beforeSend: function(xhr) {
						hash = btoa(logInUser + ":" + logInPassword);
						console.log(hash);
						xhr.setRequestHeader("Authorization", "Basic " + hash);
					},
					success: function(data) {
						console.log(data);
						for (var i = 0; i < data.length; i++) { //for number of json objects
							tr = $('<tr/>'); //end last line of table
							tr.append("<td>" + data[i].firstname + "</td>"); //column for first name
							tr.append("<td>" + data[i].surname + "</td>"); //column for surname
							tr.append("<td>" + data[i].email + "</td>"); //column for emails
							$('#users').append(tr); //complete table row.
						}
					}
				});
			});
			$('#search').keyup(function() {
					var searchfield = $('#search').val;
					var expression = new RegExp(searchfield, 'i');
					$.ajax({
						url: urlUsers,
						beforeSend: function(xhr) {
							xhr.setRequestHeader("Authorization", "Basic " + hash);
						},
						success: function(data) {
							var output = '<ul class="searchresult">';
							$.each(data, function(key, val) {
									if ((val.firstname.search(expression) != -1) || (val.lastname.search(expression) != -1)) {
										output += '<li>';
										output += '<h2>' + val.firstname + '</h2>';
										output += '<h3>' + val.surname + '" </h3>';
										output += '<p>' + val.email + '</p>';
										output += '</li>';
									}
								});
							output += '</ul>';
							$('#update').html(output);
							}
						});
				});

				$('#getbroadcasts').click(function(e) { //when broadcasts button pressed
					$('#broadcasts').empty(); //make user div empty to stop redownloading same info
					var tr = "<tr><th>Content</th><th>Posting User</th><th>URL</th></tr>"; //begin creating table
					$('#broadcasts').append(tr) //table row
					e.preventDefault();

					$.ajax({
						url: urlBroadcasts,
						beforeSend: function(xhr) {

							xhr.setRequestHeader("Authorization", "Basic " + hash);
						},
						success: function(data) {

							for (var i = 0; i < data.length; i++) { //for number of json objects
								tr = $('<tr/>'); //end last line of table
								tr.append("<td>" + data[i].content + "</td>"); //column for content
								var value = data[i].user_id; //collect userID of poster
								tr.append("<td>" + finduser(value) + "</td>"); //column content is name associated with poster ID
								tr.append("<td>" + data[i].url + "</td>"); //add post URL
								$('#broadcasts').append(tr); //complete table row.
							}
						}
					});
				});

				function finduser(userid) { //synchronus 
					var name = ''; //generate name var
					var url; //generate url var
					url = 'http://localhost:3000/users/' + userid + '.json'; //create url for the user id of the used user
					jQuery.ajax({ //ajax request
						url: url,
						beforeSend: function(xhr) {
							hash = btoa("admin" + ":" + "taliesin");
							xhr.setRequestHeader("Authorization", "Basic " + hash);
						},
						success: function(data) {
							name = data.firstname + ' ' + data.surname; //collect the first name and surname for the user at the URL
						},
						async: false
					});
					return name;
				}
			});
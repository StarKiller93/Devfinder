$(document).ready(function() {
    $('#searchUser').on('keyup', function(e){
        let username = e.target.value;

        // Make request to GitHub
        $.ajax({
            url: 'https://api.github.com/users/'+username,
            data: {
                client_id: 'af984cc0abd9b94fc8a7',
                client_secret: 'bdae5a2b005ae9a25202f192e4cb4d173dbd75dd'
            }
        }).done(function(user) {
            $("#profile").html(`
            <div class="card">
  <div class="card-header">
  ${user.name}
  </div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <div class="card-text">
            <div class="row">
            <div class="col-3">
                <img style="width:100%" class="thumbnail" src="${user.avatar_url}">
                
            </div>

            <div class="col-9">
            <span class="badge badge-primary">Pub. Repos: ${user.public_repos}</span>
            <span class="badge badge-warning">Pub. Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-danger">Following: ${user.following}</span>
            <br><br>
            <a href="${user.html_url}" class="btn btn-primary">View Profile</a>
            </div>
    </div>
    </div>
</div>
            `);
        });
    });
});
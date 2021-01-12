const components = {}
components.navbar = `
<nav class="navbar navbar-expand-sm navbar-light bg-light" >
<div class="container"> 
<a class="navbar-brand" href="../index.html"><img src="https://firebasestorage.googleapis.com/v0/b/ci37-32415.appspot.com/o/brand.png?alt=media&token=786f64d7-2d70-4131-a8fe-84d2dbe319d6" style="height:100px" /></a>
<button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse ml-5" id="collapsibleNavId">
    <form class="input-group md-form form-sm form-2 pl-0 " style="width:80%" action = "http://localhost:8000/api/list-music"
    method = "GET" >
    <input class="form-control my-0 py-1 red-border" id ="keyword" type="text" placeholder="Search" aria-label="Search" autocomplete="off">
    <div class="input-group-append">
    <button class = "btn btn-outline-secondary my-sm-0"
    type = "submit"
    id = "btn-search" ><i class="fas fa-search text-grey"
              aria-hidden="true"></i></button> 
    </div>
  </form>
  <a type="button" id="sign-in-navbar" href ="#" style ="
  position: relative;
  bottom: 52px;
  right: 60px;
  font-size : 14px;
  color:#1761a0
"data-toggle="modal" data-target="#exampleModal">
<i class="fas fa-sign-in-alt"></i> Sign in
</a>
<span id="changeName"  style ="
position: relative;
bottom: 52px;
right: 115px;
font-size : 14px;
color:#1761a0 ">
</span>
<button type="button" class="btn btn-sm btn-secondary" style="display:none" id="btn-log-out">Log out</button>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Sign In</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <form action = "http://localhost:8000/api/sign-in" method = "GET" id="form-log-in">
      <div class="form-group">
        <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
      </div>
        <input type="password" class="form-control" id="InputPassword" placeholder="Enter Password">
    </form>
    </div>
 <div id="wrong-user"></div>
   
    <div class="modal-footer">
    <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
    <button type="submit" class="btn btn-success" id="btn-login-in">Login</button>
  </div>
      </div>
      
    </div>
  </div>
</div>
</div>
</div>
      
    </nav>
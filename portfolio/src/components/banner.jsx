import CardTitle from "react-bootstrap/CardTitle";


function Banner(){

  return (
    <div>
      <div className="justify-content-center">
        <div className="bg-dark text-white">
          <CardTitle>
          <div className = "profile-info">
            <img className ="avatar-bordered" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694367324/portfolio/profilephoto_efbve2.jpg" alt="Profile Photo"/>
          </div>
            <h1>I specialize in<strong> thinking outside of the box</strong> to <strong>find simple solutions to complex problems </strong>!</h1>
            {/* <img className ="banner-puzzle-piece" src="https://res.cloudinary.com/dtxxea3qi/image/upload/v1694367159/portfolio/puzzle_piece_ioyejx.jpg" alt="jigsaw_puzzle"/> */}
          </CardTitle>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;

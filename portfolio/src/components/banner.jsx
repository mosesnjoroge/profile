import Card from 'react-bootstrap/Card'
import CardImg from "react-bootstrap/CardImg";
import CardImgOverlay  from "react-bootstrap/CardImgOverlay";
import CardTitle from "react-bootstrap/CardTitle";


export default function Banner(){


  return (
    <div>
      <div className="justify-content-center">
        <Card className="bg-dark text-white">
          <CardImg src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/background.png" alt="Card image" />
          <CardImgOverlay>
            <CardTitle>
              Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!
              Change your life and learn to code at one of our campuses around the world.
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    </div>
  );
}

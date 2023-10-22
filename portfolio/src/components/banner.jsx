import Card from 'react-bootstrap/Card'
import CardTitle from "react-bootstrap/CardTitle";


export default function Banner(){


  return (
    <div>
      <div className="justify-content-center">
        <Card className="bg-dark text-white">
            <CardTitle>
              Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!
              Change your life and learn to code at one of our campuses around the world.
            </CardTitle>
        </Card>
      </div>
    </div>
  );
}

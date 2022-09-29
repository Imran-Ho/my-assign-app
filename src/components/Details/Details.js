import Break from '../Break/Break';
import Exercise from '../Exercise/Exercise';
import Personal from '../Personal/Personal';
import Sport from '../Sport/Sport';
import './Details.css'

const Details = () => {
    const games = [
        {
          "id": "633520e071b7cbfd7e3587b5",
          "index": 0,
          "isActive": true,
          "balance": "$2,950.86",
          "picture": "https://media.istockphoto.com/photos/close-up-shot-of-runners-shoes-picture-id1148822167?s=612x612",
          "Time": 26,
          "eyeColor": "blue",
          "name": "Morning Walk"
        },
        {
          "id": "633520e0bf3ed6dec7fb671a",
          "index": 1,
          "isActive": true,
          "balance": "$1,105.68",
          "picture": "https://media.istockphoto.com/photos/man-sitting-on-sofa-reading-a-book-picture-id457207689?s=612x612",
          "Time": 34,
          "eyeColor": "green",
          "name": "Read Book"
        },
        {
          "id": "633520e069d6f6554325e6bb",
          "index": 2,
          "isActive": false,
          "balance": "$2,698.97",
          "picture": "https://media.istockphoto.com/photos/cropped-shot-of-a-male-athlete-grabbing-a-set-of-dumbbells-during-his-picture-id1307898757?s=612x612",
          "Time": 37,
          "eyeColor": "green",
          "name": "Gym"
        },
        {
          "id": "633520e0aee01608c692ecb3",
          "index": 3,
          "isActive": false,
          "balance": "$1,524.44",
          "picture": "https://media.istockphoto.com/photos/wicketkeeper-catching-the-ball-picture-id1320338946?s=612x612",
          "Time": 33,
          "eyeColor": "brown",
          "name": "Playing Cricket"
        },
        {
          "id": "633520e0f47faab7601d582a",
          "index": 4,
          "isActive": false,
          "balance": "$3,103.89",
          "picture": "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBsYXklMjBjcmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          "Time": 35,
          "eyeColor": "blue",
          "name": "Playing Piano"
        },
        {
          "id": "633520e0f47faab7601d582a",
          "index": 5,
          "isActive": false,
          "balance": "$3,103.89",
          "picture": "https://images.unsplash.com/photo-1622701078972-f8af88c33bc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=857&q=80",
          "Time": 37,
          "eyeColor": "blue",
          "name": "Gossip"
        }
      ];
    return (
        <div className='row m-3'>
            <div className='col-8'>
                <h2>Ultra-Active-Club</h2>
                <h4 className='my-5'>Select today’s Sports</h4>
               <div className="row row-cols-4 row-cols-md-3 g-4">
                {
                    games.map(game => <Sport 
                        sport={game}
                        key={game.index}
                    ></Sport>)
                }
               </div>

            </div>
            <div className='col-4'>
                <Personal></Personal>
                <Break></Break>
                <Exercise></Exercise>
            </div>
        </div>
    );
};

export default Details;
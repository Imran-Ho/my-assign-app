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
          "picture": "http://placehold.it/32x32",
          "Time": 26,
          "eyeColor": "blue",
          "name": "Nash Zamora"
        },
        {
          "id": "633520e0bf3ed6dec7fb671a",
          "index": 1,
          "isActive": true,
          "balance": "$1,105.68",
          "picture": "http://placehold.it/32x32",
          "Time": 34,
          "eyeColor": "green",
          "name": "Dawson Pratt"
        },
        {
          "id": "633520e069d6f6554325e6bb",
          "index": 2,
          "isActive": false,
          "balance": "$2,698.97",
          "picture": "http://placehold.it/32x32",
          "Time": 37,
          "eyeColor": "green",
          "name": "Lula Wise"
        },
        {
          "id": "633520e0aee01608c692ecb3",
          "index": 3,
          "isActive": false,
          "balance": "$1,524.44",
          "picture": "http://placehold.it/32x32",
          "Time": 33,
          "eyeColor": "brown",
          "name": "Kelsey Savage"
        },
        {
          "id": "633520e0f47faab7601d582a",
          "index": 4,
          "isActive": false,
          "balance": "$3,103.89",
          "picture": "http://placehold.it/32x32",
          "Time": 35,
          "eyeColor": "blue",
          "name": "Burgess Velez"
        },
        {
          "id": "633520e0f47faab7601d582a",
          "index": 5,
          "isActive": false,
          "balance": "$3,103.89",
          "picture": "http://placehold.it/32x32",
          "Time": 37,
          "eyeColor": "blue",
          "name": "Burgess Velez"
        },
        {
          "id": "633520e0f47faab7601d582a",
          "index": 6,
          "isActive": false,
          "balance": "$3,103.89",
          "picture": "http://placehold.it/32x32",
          "Time": 40,
          "eyeColor": "blue",
          "name": "Burgess Velez"
        }
      ];
    return (
        <div className='row m-3'>
            <div className='col-8'>
                <h2>Ultra-Active-Club</h2>
                <h4>Select today’s Sports</h4>
                {
                    games.map(game => <Sport 
                        sport={game}
                        key={game.index}
                    ></Sport>)
                }

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
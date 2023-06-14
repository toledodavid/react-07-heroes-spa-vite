import { getHeroesByPublisher } from '../helpers';
import { HeroeCard } from './';


export const HeroesList = ({publisher}) => {
  const heroes = getHeroesByPublisher(publisher);

  return(
    <div className='row row-cols-1 row-cols-md-3 g-3'>
      {
        heroes.map(heroe => <HeroeCard key={heroe.id} {...heroe} />)
      }
    </div>
  );
}
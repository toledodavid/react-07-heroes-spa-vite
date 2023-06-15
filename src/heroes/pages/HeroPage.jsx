import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../helpers";

export const HeroPage = () => {

  const {id, ...rest} = useParams();
  const navigate = useNavigate();

  const heroe = getHeroeById(id);

  const onNavigateBack = () => {
    navigate(-1)
  }

  if (!heroe) {
    return <Navigate to="/marvel" />
  }

  return(
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`}
            alt={heroe.superhero}
            className="img-thumbnail" />
      </div>

      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego:</b> {heroe.alter_ego}</li>
          <li className="list-group-item"><b>Publisher:</b> {heroe.publisher}</li>
          <li className="list-group-item"><b>First appearance:</b> {heroe.first_appearance}</li>
        </ul>

        <h5 className="mt-3">Characters</h5>
        <p>{heroe.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>Back</button>
      </div>
    </div>
  );
}
import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/Heroes";
import { useNavigate, useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroPage.module.css";
import { Button } from "react-bootstrap";

export const HeroPage = () => {
    
    const [hero, setHero] = useState<IHeroes|null>(null);
    const {id} = useParams();
    const getHeroById = ()=>{
        const result = heroesData.find((h)=> h.id === id)
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        result ? setHero(result) : setHero(null); 
    }
    useEffect(()=>{
        getHeroById();
    },[])
    const navigate = useNavigate();
    const handleNavigate = ()=>{
        navigate(-1); // Regreso a la pagina anterior
    }

    return (
        <>
            {
                hero && 
                <div className={styles.containerHeroPage}>
                    <div className={styles.containerImgHeroPage}>
                        <img src={`/assets/heroes/${id}.jpg`} />
                    </div>
                    <div>
                        <h3>{hero.superhero}</h3>
                        <ul>
                            <li><b>Alter ego:</b>{hero.alter_ego}</li>
                        </ul>
                        <ul>
                            <li><b>Publicadora:</b>{hero.publisher}</li>
                        </ul>
                        <ul>
                            <li><b>Primera aparicion:</b>{hero.first_appearance}</li>
                        </ul>
                        <Button onClick={handleNavigate} variant="primary">Regresar</Button>
                    </div>
                </div>
            }
        </>
    )
}

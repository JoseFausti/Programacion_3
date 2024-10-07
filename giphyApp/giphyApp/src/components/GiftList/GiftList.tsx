// import { FC } from "react";
import { CardGift } from "../ui/CardGift/CardGift";
import { useAppSelector } from "../../hooks/redux";

// interface IGift {
//   urlGift: string;
//   title: string;
// }
// interface IPropsGiftList{
//   gift: IGift[]
// }
export const GiftList = () => { {/* : FC<IPropsGiftList> = ({gift}) */}

  // Se usa el hook `useAppSelector` para acceder al estado global de Redux
  // Aquí, se está seleccionando el array de 'gift' desde el estado global (state.gift.gift)
  // `state.gift` hace referencia a la parte del estado gestionada por el slice 'giftSlice'
  // y `gift` es la propiedad dentro del slice que contiene el array de regalos.
  const gift = useAppSelector(state => state.gift.gift)

  return (
    <div style={{
      display:'grid',
      gridTemplateColumns: 'repeat(3, .6fr)',
      gap: '2vh'
    }}>
        {
          gift.map((el, i) => (
            <CardGift key={i} gift={el} />
          ))
        }      
    </div>
  )
  
}


import Image from "next/image";

import { CharacterStatus } from "..";
import { Character } from "@/app/(information)/characters/models";
import { genericBlur } from "@/models";

const CharacterCard = ({ character } : { character: Character } ) => {
   return (
      <div
         key={ character.id }
         className="w-full md:flex lg:w-5/12 mb-6 rounded-2xl"
         style={ { backgroundColor: "rgb(60, 62, 68)" } }
      >
         <div className="sm:w-full md:w-4/12 lg:w-6/12">
            <Image
               className="w-full rounded-t-2xl md:rounded-none md:rounded-l-2xl  md:h-full"
               quality={100}
               blurDataURL={ genericBlur }
               placeholder="blur"
               src={ character.image }
               alt={ character.name }
               width={ 200 }
               height={ 200 }
            />
         </div>
         <div className="p-4 sm:w-full">
            <p className="character-name leading-tight mb-2  tracking-tight text-gray-900 dark:text-white break-all">
               { character.name }
            </p>
            <div className="flex gap-2 items-center -mt-1 text-white">
                  
               <CharacterStatus status={ character.status } />
                  -
               <p className="text-[1rem]  font-medium ">
                  { character.species }
               </p>
            </div>
            <div className="flex flex-col text-white mt-4 font-normal">
               <p className="text-[0.975rem] text-zinc-400">
                Last known location:
               </p>
               <p className="text-lg">{ character.location.name }</p>
            </div>
            <div className="flex flex-col text-white mt-4 font-normal">
               <p className="text-[0.975rem] text-zinc-400">
                First seen in:
               </p>
               <p className="text-lg">{ character.origin.name }</p>
            </div>
            
         </div>
      </div>
   );
};

export default CharacterCard;
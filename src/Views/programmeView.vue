<template>

<note class="absolute w-80 left-1/2"/>
    <div class="grid lg:grid-cols-3 grid-cols-2 mt-4">
        <frise class="lg:ml-2 lg:h-1/3 h-1/2"/>
        <ul>
            <!-- Section Pop Française -->
            <li class="mb-16"> <div class="group hover:shadow-2xl hover:scale-105 ml-auto mr-auto">
                <!-- <fond class="absolute z-1 left-0 w-full"/> -->
                <div class="bg-opacity-40 bg-Jaune p-11">
                    <h2 class="z-2 flex-grow-0 flex-shrink-0 mb-4">Pop Française</h2>
                    <p class="z-2 text-xs">Concert de plusieurs heures avec nos plus grands artistes de la pop française tels que Angèle, Amir, Calogero, ... et bien plus encore vous attendent dans ce concert exclusivement assis le vendredi 17 juin 2022 de 19h00 à 23h00.</p>
                    <RouterLink to="/"><button class="ml-auto border-2 py-2 px-4 rounded-full border-violet2 text-violet2 mt-2">Voir plus</button></RouterLink>
                </div>
            </div> </li>

<note class="absolute w-80 -left-0"/>

            <!-- Section Pop Japonaise -->
            <li class="mb-16"> <div class="group hover:shadow-2xl hover:scale-105 ml-auto mr-auto">
                <!-- <fond class="absolute z-1 left-0 w-full"/> -->
                <div class="bg-opacity-40 bg-Jaune p-11">
                    <h2 class="z-2 flex-grow-0 flex-shrink-0 mb-4">Pop Japonaise</h2>
                    <p class="z-2 text-xs">Concert de plusieurs heures autour de la culture pop au pays du soleil-levant 
avec les plus grands artistes tels que Lisa, AKB48, ... et bien plus encore vous 
attendent dans ce concert le samedi 18 juin 2022 de 20h00 à 00h00.</p>
                    <RouterLink to="/"><button class="ml-auto border-2 py-2 px-4 rounded-full border-violet2 text-violet2 mt-2">Voir plus</button></RouterLink>
                </div> 
                </div></li>        

<note class="absolute w-80 left-1/2"/>

            <!-- Section Pop Coréenne -->
            <li class="mb-16"> <div class="group hover:shadow-2xl hover:scale-105 ml-auto mr-auto">
                <!-- <fond class="absolute z-1 left-0 w-full"/> -->
                <div class="bg-opacity-40 bg-Jaune p-11">
                    <h2 class="z-2 flex-grow-0 flex-shrink-0 mb-4">Pop Coréenne</h2>
                    <p class="z-2 text-xs">Concert de plusieurs heures avec de grands artistes de la pop coréenne tels 
que les BTS, Loona, ... et bien plus encore vous attendent dans ce concert 
le Dimanche 19 Juin 2022 de 22h00 à 02h00.</p>
                    <RouterLink to="/"><button class="ml-auto border-2 py-2 px-4 rounded-full border-violet2 text-violet2 mt-2">Voir plus</button></RouterLink>
                </div> 
            </div> </li>
        </ul>     
    </div>
</template>

<script>
import frise from "../components/icones/frise.vue"
import fond from "../components/icones/fondprog.vue"
import note from "../components/icones/notemusic.vue"

export default {
    components:{ frise, fond, note }
};
</script>
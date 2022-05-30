<template>
    <div
  class="flex flex-col justify-start items-start w-[352px] h-[413px] relative rounded-lg bg-white border-[1.5px] border-[#a414c2]"
>
  <div class="self-stretch flex-grow-0 flex-shrink-0 h-[200px]">
    <div
      class="w-[352px] h-[200px] absolute left-[-0.5px] top-[-0.5px] rounded-tl-lg rounded-tr-lg bg-[#130f26]"
    ></div>
    <img
      class="w-[352px] h-[235px] absolute left-[-0.5px] top-[-24.5px]"
      :src="img"
    />
  </div>
  <div
    class="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[15px] px-5 py-[30px]"
  >
    <div
      class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-[15px]"
    >
      <div class="flex-grow h-[75px]">
        <div
          class="flex justify-start items-end w-[205.64px] absolute left-[-0.5px] top-[-0.5px] gap-0.5"
        >
          <p class="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#ba58ce]">
            {{ title }}
          </p>
        </div>
        <p class="absolute left-0 top-[43px] font-semibold text-left text-black">
          {{ date }} - {{ txt }}
        </p>
      </div>
    </div>
    <p class="self-stretch flex-grow-0 flex-shrink-0 text-left text-black">
      {{ chanteurs }}
    </p>
    <svg
      width="312"
      height="2"
      viewBox="0 0 312 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="self-stretch flex-grow-0 flex-shrink-0"
      preserveAspectRatio="xMidYMid meet"
    >
      <line y1="1.25" x2="312" y2="1.25" stroke="#A414C2" stroke-width="1.5"></line>
    </svg>
    <div class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-1.5">
      <div class="flex justify-start items-center flex-grow relative gap-2">
        <img
          src="./icones/homecard_peoples.png"
          class="flex-grow-0 flex-shrink-0 w-[26px] h-[26px] object-cover"
        />
        <p class="flex-grow-0 flex-shrink-0 text-xs text-left text-black"> {{ place }}</p>
      </div>
      <div class="flex justify-end items-center flex-grow relative gap-2">
        <a :href="url">
        <button class="flex-grow-0 flex-shrink-0 w-[91px] h-[23px]">
          <div
            class="w-[91px] h-[23px] absolute left-[60px] top-[-2px] rounded-lg border-4 border-[#e0d400]"
          ></div>
          <p class="absolute left-[82px] top-1 text-xs text-left text-black">Voir Plus</p>
          <img
            src="expand-button-1.png"
            class="w-[13px] h-[15px] absolute left-[132px] top-[17px] object-cover"
          />
        </button>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
props: {
    title: {
      type: String,
      default: "",
    },
    url: {
        type: String,
        default: "#",
    },

    img: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
    },

    txt: {
      type: String,
      default: "2h", 
    },

    chanteurs: {
      type: String,
      default: "",
    },

    place: {
      type: Number,
    },
}
};
</script>
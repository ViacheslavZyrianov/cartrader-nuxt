<script setup lang="ts">
definePageMeta({
  layout: "custom",
});

const { makes } = useCars();
const user = useSupabaseUser()

const info = useState("adInfo", () => ({
  make: "",
  model: "",
  year: "",
  miles: "",
  price: "",
  city: "",
  seats: "",
  features: "",
  description: "",
  image: null,
}));

const errorMessage: Ref<string> = ref("")

const onChangeInput = (data, name) => {
  info.value[name] = data;
};

const inputs = [
  {
    id: 1,
    title: "Model *",
    name: "model",
    placeholder: "Civic",
  },
  {
    id: 2,
    title: "Year *",
    name: "year",
    placeholder: "2019",
  },
  {
    id: 3,
    title: "Miles *",
    name: "miles",
    placeholder: "10000",
  },
  {
    id: 4,
    title: "Price *",
    name: "price",
    placeholder: "$4000",
  },
  {
    id: 5,
    title: "City *",
    name: "city",
    placeholder: "Austin",
  },
  {
    id: 6,
    title: "Number of Seats *",
    name: "seats",
    placeholder: "5",
  },
  {
    id: 7,
    title: "Features *",
    name: "features",
    placeholder: "Leather Interior, No Accidents",
  },
];

const isButtonSubmitDisabled: ComputedRef<boolean> = computed(() => Object.values(info.value).some(value => value === "" || value === null));

const buttonSubmitClassList = computed(() => ({
  'text-white rounded py-2 px-8 mr-auto mt-4': true,
  'bg-blue-400': !isButtonSubmitDisabled.value,
  'bg-gray-400 cursor-not-allowed': isButtonSubmitDisabled.value,
}));

const onFormSubmit = async () => {
  const body = {
    ...info.value,
    name: `${info.value.make} ${info.value.model}`,
    city: info.value.city,
    description: info.value.description,
    features: info.value.features.split(", "),
    numberOfSeats: parseInt(info.value.seats, 10),
    year: parseInt(info.value.year, 10),
    price: parseInt(info.value.price, 10),
    miles: parseInt(info.value.miles, 10),
    image: info.value.image ? info.value.image.name : null,
    listerId: user.value.id
  };

  delete body.seats;

  try {
    await $fetch("/api/car/listings", {
      method: "POST",
      body,
    });

    navigateTo('/profile/listings');
  } catch (error) {
    errorMessage.value = error.statusMessage;
  }
}
</script>


<template>
  <div>
    <div class="mt-24">
      <h1 class="text-6xl">Create a New Listing</h1>
    </div>
    <pre>{{info}}</pre>
    <form class="shadow rounded p-3 mt-5 flex flex-wrap justify-between" @submit.prevent="onFormSubmit">
      <CarAdSelect
        title="Make *"
        :options="makes"
        name="make"
        @change-input="onChangeInput"
      />
      <CarAdInput
        v-for="input in inputs"
        :key="input.id"
        :title="input.title"
        :name="input.name"
        :placeholder="input.placeholder"
        @change-input="onChangeInput"
      />
      <CarAdTextarea
        title="Description *"
        name="description"
        placeholder=""
        @change-input="onChangeInput"
      />
      <CarAdImage @change-input="onChangeInput" />
      <div>
        <button
          type="submit"
          :disabled="isButtonSubmitDisabled"
          :class="buttonSubmitClassList"
        >
          Submit
        </button>

        <p v-if="errorMessage" class="text-red-400 mt-2">
          {{ errorMessage }}
        </p>
      </div>
    </form>
  </div>
</template>

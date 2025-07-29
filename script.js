const { createApp } = Vue;

createApp({
  data() {
    return {
      tugasBaru: "",
      daftarTugas: [],
    };
  },
  methods: {
    tambahTugas() {
      if (this.tugasBaru.trim() !== "") {
        this.daftarTugas.push(this.tugasBaru);
        this.tugasBaru = "";
      }
    },
    hapusTugas(index) {
      this.daftarTugas.splice(index, 1);
    },
  },
}).mount("#app");

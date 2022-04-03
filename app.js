const app = Vue.createApp({
  data() {
    return {
      todoList: [
        { id: 1, text: "Ödevlerini yap.", completed: false },
        { id: 2, text: "Yürüyüşe çık.", completed: false },
        { id: 3, text: "Kitap oku.", completed: false },
        { id: 4, text: "Bol su iç.", completed: false },
        { id: 5, text: "Kodlama öğren.", completed: false },
      ],
      todoText: "",
      selectedItem: null,
    };
  },
  methods: {
    addTodo() {
      this.todoList.push({
        id: this.todoList.length + 1,
        text: this.todoText,
        completed: false,
      });
      this.todoText = "";
    },
    removeItem(todoItem) {
      this.todoList = this.todoList.filter((todo) => todo !== todoItem);
    },
    editTodo() {
      const index = this.todoList.findIndex(
        (item) => item.id == this.selectedItem.id
      );
      this.selectedItem = Object.assign(this.selectedItem, {});
      this.todoList[index] = this.selectedItem;
      this.selectedItem = null;
    },
  },
}).mount("#app");

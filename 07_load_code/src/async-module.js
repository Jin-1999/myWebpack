function importLodash() {
  import("lodash").then(({ default: _ }) => {
    console.log("async-module", _.join([10, 11, 12]));
  });
}

importLodash();

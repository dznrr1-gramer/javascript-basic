function buatSession(username) {
  // Variable private
  let user = username;
  let isLogin = true;

  return {
    cekStatus: function() {
      console.log(`User: ${user}`);
      console.log(`Status: ${isLogin ? "Login" : "Logout"}\n`);
    },

    logout: function() {
      if (isLogin) {
        isLogin = false;
        console.log("Logout berhasil.\n");
      } else {
        console.log("User sudah dalam keadaan logout.\n");
      }
    },

    login: function() {
      if (!isLogin) {
        isLogin = true;
        console.log("Login berhasil.\n");
      } else {
        console.log("User sudah dalam keadaan login.\n");
      }
    }
  };
}

const session = buatSession("budi123");

session.cekStatus();
session.logout();
session.cekStatus();

// Membuktikan enkapsulasi/data private
console.log("Akses langsung session.isLogin:", session.isLogin); // Output: undefined
console.log("Akses langsung session.username:", session.username); // Output: undefined

// Pengujian dengan 2 Session terpisah
console.log("--- Pengujian Multi Session ---");
const sessionBudi = buatSession("budi123");
const sessionAni = buatSession("ani456");

sessionBudi.logout();

sessionBudi.cekStatus();
sessionAni.cekStatus();
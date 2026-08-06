const playlist = {
  title: "== My Playlist ==",
  songs: [],

addSong: function (song) {
    this.songs.push(song);
  },
deleteSong: function (song) {
    const index = this.songs.indexOf(song);
    if (index !== -1) {
      this.songs.splice(index, 1);
    }
  },

printPlaylist: function () {
    console.log(this.title);
    this.songs.forEach(function (song) {
      console.log(song);
    });
  }
};

playlist.addSong("Hymn for the Weekend");
playlist.addSong("Numb");
playlist.printPlaylist();
React Hook

1. Hooks merupakan fitur baru di React 16.8. Dengan Hooks, kita dapat menggunakan state dan fitur React yang lain tanpa perlu menulis seuah kelas.

2.  Aturan pada Hooks
+ Hanya panggil Hooks di tingkat atas
    Jangan memanggil Hooks dari dalam loops, conditions, atau nested functions
+ Hanya Panggil Hooks dari Fungsi-Fungsi React
   Jangan memanggil Hooks dari fungsi-fungsi JavaScript biasa.
    Kita dapat:
    - Memanggil Hooks dari komponen-komponen fungsi React.
    - Memanggil Hooks dari custom Hooks

3.   Custom Hooks 
    Membuat Hook Kita sendiri memungkinkan Kita mengekstrak komponen logika ke fungsi yang dapat digunakan lagi.
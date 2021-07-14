/*
Algoritma:
1. buat variabel kandidat bertipe objek dan masukin value untuk dites
2. buat looping sebanyak jumlah data yang ada di kandidat
3. dalam looping, buat conditional untuk mengelompokkan kandidat yang 
termasuk junior, middle, atau senior
4. buat nested conditional untuk menentukan jumlah pengalaman tiap kandidat 
yang sudah dikelompokkan berdasarkan lokernya
5. assign jumlah gaji sesuai loker dan jumlah pengalaman tiap kandidat
6. tampilkan hasilnya
*/

let kandidat = [
    {
        name: "kandidat1",
        pengalaman: 1,
        loker: "Junior",
        gaji: 0
    },
    {
        name: "kandidat2",
        pengalaman: 3,
        loker: "Junior",
        gaji: 0
    },
    {
        name: "kandidat3",
        pengalaman: 6,
        loker: "Junior",
        gaji: 0
    },
    {
        name: "kandidat4",
        pengalaman: 1,
        loker: "Middle",
        gaji: 0
    },
    {
        name: "kandidat5",
        pengalaman: 3,
        loker: "Middle",
        gaji: 0
    },
    {
        name: "kandidat6",
        pengalaman: 6,
        loker: "Middle",
        gaji: 0
    },
    {
        name: "kandidat7",
        pengalaman: 1,
        loker: "Senior",
        gaji: 0
    },
    {
        name: "kandidat8",
        pengalaman: 3,
        loker: "Senior",
        gaji: 0
    },
    {
        name: "kandidat9",
        pengalaman: 6,
        loker: "Senior",
        gaji: 0
    }
];

for(let i = 0; i < kandidat.length; i++) {
    if (kandidat[i].loker === "Junior") {
        if (kandidat[i].pengalaman < 2) {
            kandidat[i].gaji = 3000000;
        } else if (kandidat[i].pengalaman >= 2 && kandidat[i].pengalaman <=5) {
            kandidat[i].gaji = 4000000;
        } else {
            kandidat[i].gaji = 5000000;
        }
    } else if (kandidat[i].loker === "Middle") {
        if (kandidat[i].pengalaman < 2) {
            kandidat[i].gaji = 5500000
        } else if (kandidat[i].pengalaman >= 2 && kandidat[i].pengalaman <=5) {
            kandidat[i].gaji = 6500000;
        } else {
            kandidat[i].gaji = 7500000;
        }
    } else if (kandidat[i].loker === "Senior") {
        if (kandidat[i].pengalaman < 2) {
            kandidat[i].gaji = 7500000;
        } else if (kandidat[i].pengalaman >= 2 && kandidat[i].pengalaman <=5) {
            kandidat[i].gaji = 9000000;
        } else {
            kandidat[i].gaji = 10000000;
        }
    }
}

console.log(kandidat);
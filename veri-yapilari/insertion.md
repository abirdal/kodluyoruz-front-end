1. Insertion Sort:
Dizi: [22, 27, 16, 2, 18, 6]

Insertion Sort aşamaları:

[22]
[22, 27]
[16, 22, 27]
[2, 16, 22, 27]
[2, 16, 18, 22, 27]
[2, 6, 16, 18, 22, 27]
[2, 6, 16, 18, 22, 27]

2. Big-O Gösterimi

Best Case O(n)
Average Case O(n^2)

3. Time Complexity ve 18 Sayısının Durumu

18 elemanı dizinin ortalarında yer alır, average case kapsamına girer.

4. Selection Sort:

En küçük eleman bulunur (2). 2 ile ilk eleman (7) yer değiştirir:
[2, 3, 5, 8, 7, 9, 4, 15, 6]

Kalan elemanlardan en küçük eleman (3) bulunur, yerinde kalır:
[2, 3, 5, 8, 7, 9, 4, 15, 6]

Kalan elemanlardan en küçük eleman (4) bulunur ve 3. sıradaki elemanla (5) yer değiştirilir:
[2, 3, 4, 8, 7, 9, 5, 15, 6]

Kalan elemanlardan en küçük eleman (5) bulunur ve 4. sıradaki elemanla (8) yer değiştirilir:
[2, 3, 4, 5, 7, 9, 8, 15, 6]
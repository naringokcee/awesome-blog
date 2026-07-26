---
layout: post-layout.html
title: "Java Öğreniyorum #1: Değişkenler, Veri Tipleri ve Scanner ile Kullanıcıdan Veri Alma"
date: 2026-06-28
category: Yazılım
author: Narin Gökçe
readingTime: 10 dk okuma
image: "/img/java_foto.png"
tags: posts
description: "Java öğrenmeye başlarken göz korkutan uzun kod yapılarının arkasında aslında çok mantıklı ve sistemli bir yapı yatıyor. Bu yazıda Java'nın en temel iki yapı taşını detaylıca ve bol örnekle inceleyeceğiz: **Değişkenler** ve **Scanner ile Kullanıcıdan Girdi Alma**."



---
Java öğrenmeye başlarken göz korkutan uzun kod yapılarının arkasında aslında çok mantıklı ve sistemli bir yapı yatıyor. Bu yazıda Java'nın en temel iki yapı taşını detaylıca ve bol örnekle inceleyeceğiz: **Değişkenler** ve **Scanner ile Kullanıcıdan Girdi Alma**.

### 1. Değişkenler (Variables) ve Temel Veri Tipleri

Değişkenleri, bilgisayarın belleğinde (RAM) verilerimizi saklamak için oluşturduğumuz etiketli kutular gibi düşünebiliriz. Java "tip güvenli" (strongly typed) bir dil olduğu için, bir kutu oluştururken içine ne tür bir veri koyacağımızı baştan belirtmemiz gerekir.

Günlük kodlama pratiğinde en çok karşılaşacağımız 4 temel veri tipi şunlardır:

*   **`int` (Integer):** Tam sayıları saklar.
*   **`double`:** Ondalıklı sayıları saklar.
*   **`String`:** Metinleri saklar (Çift tırnak içinde yazılır).
*   **`boolean`:** Sadece `true` (doğru) veya `false` (yanlış) değerlerini alır.

#### Örnek 1: Temel Değişken Tanımlama ve Yazdırma

```java
public class Main {
    public static void main(String[] args) {
        // Değişkenlerin tanımlanması
        String urunAdi = "Kablosuz Kulaklık";
        double fiyati = 49.99;
        int stokAdedi = 15;
        boolean satisTami = true;

        // Değişkenlerin ekrana basılması
        System.out.println("Ürün Adı: " + urunAdi);
        System.out.println("Fiyatı: " + fiyati + " EUR");
        System.out.println("Stok Adedi: " + stokAdedi);
        System.out.println("Satışta mı?: " + satisTami);
    }
}
```



#### Örnek 2: Değişkenlerle Matematiksel İşlemler

Değişkenler sadece veri saklamaz, üzerlerinde işlem yapmamıza da olanak tanır:

```java
public class Main {
    public static void main(String[] args) {
        int baslangicSkoru = 100;
        int kazanilanPuan = 50;
        
        // İki değişkeni toplayarak yeni bir değişkene atıyoruz
        int toplamSkor = baslangicSkoru + kazanilanPuan;

        System.out.println("Başlangıç: " + baslangicSkoru);
        System.out.println("Kazanılan: " + kazanilanPuan);
        System.out.println("Toplam Oyun Skoru: " + toplamSkor);
    }
}
```


### 2. Scanner Sınıfı ile Kullanıcıdan Veri Alma

Kodlarımızın dinamik olması ve kullanıcı ile etkileşime geçebilmesi için dışarıdan veri almamız gerekir. Java'da bu işi yapmamızı sağlayan en temel yapı **`Scanner`** sınıfıdır.

`Scanner` kullanırken dikkat edilmesi gereken iki nokta vardır:

1. Dosyanın en üstüne `import java.util.Scanner;` satırını eklemek.
2. Alacağımız veri tipine uygun metodu (`nextLine()`, `nextInt()`, `nextDouble()`) çağırmak.


#### Örnek 3: Kullanıcı Profili Oluşturma

```java
import java.util.Scanner; // 1. Kütüphaneyi dahil ediyoruz

public class Main {
    public static void main(String[] args) {
        // 2. Scanner nesnesini oluşturuyoruz
        Scanner scanner = new Scanner(System.in);

        // Kullanıcıdan metin (String) alma
        System.out.print("Adınızı giriniz: ");
        String isim = scanner.nextLine();

        // Kullanıcıdan tam sayı (int) alma
        System.out.print("Yaşınızı giriniz: ");
        int yas = scanner.nextInt();

        System.out.println("--------------------------------");
        System.out.println("Sisteme kayıt başarılı! Hoş geldin " + isim + " (" + yas + ")");
    }
}

```

#### Örnek 4: Mini Hesap Makinesi (Uygulama Örneği)


Kullanıcıdan iki farklı sayı alıp bunların toplamını ekrana yazdıran pratik bir uygulama:

```java
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Birinci Sayıyı Giriniz: ");
        int sayi1 = scanner.nextInt();

        System.out.print("İkinci Sayıyı Giriniz: ");
        int sayi2 = scanner.nextInt();

        int toplam = sayi1 + sayi2;

        System.out.println("--------------------------------");
        System.out.println("Girdiğiniz Sayıların Toplamı: " + toplam);
    }
}
```

###  Özet & Temel İpuçları 💡

**camelCase standardı:** 
Java'da değişken isimleri yazılırken ilk kelime küçük, sonraki kelimelerin ilk harfi büyük yazılır (birinciSayi, kullaniciAdi gibi).

**Yorum Satırları:**
Tek satırlık açıklamalar için //, çok satırlı açıklamalar için /* ... */ yapısı kullanılır.

**Print vs Println:**
 System.out.println() yazdırıp alt satıra geçerken, System.out.print() imleci aynı satırda tutar (kullanıcıdan veri isterken kullanışlıdır).
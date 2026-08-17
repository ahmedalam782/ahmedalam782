<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:00b4d8,100:0077b6&height=200&section=header&text=Ahmed%20Mohamed%20Osman&fontSize=42&fontColor=ffffff&fontAlignY=38&desc=Senior%20Flutter%20Developer%20%7C%20Open-Source%20Author%20%7C%20Clean%20Architecture&descSize=16&descAlignY=58&animation=fadeIn" width="100%" />

</div>

<div align="center">

[![Typing SVG](https://readme-typing-svg.herokuapp.com?font=JetBrains+Mono&weight=600&size=22&pause=1000&color=00B4D8&center=true&vCenter=true&width=600&lines=Senior+Flutter+Developer+%F0%9F%93%B1;4%2B+Production+Apps+on+Play+%26+App+Store+%F0%9F%9A%80;Author+of+adaptive_video_player+(370%2B+Downloads)+%F0%9F%93%A6;Clean+Architecture+%7C+BLoC+%7C+Firebase+%F0%9F%94%A5;Building+with+purpose%2C+shipping+with+pride+%F0%9F%8E%AF)](https://git.io/typing-svg)

</div>

---

## 🧑‍💻 About Me

```dart
class AhmedOsman extends SeniorFlutterDeveloper {
  final String location     = "Benha, Qalyubia, Egypt 🇪🇬";
  final String currentRole  = "Flutter Developer @ MDSoft";
  final String education    = "B.Sc. Computer Science — Benha University (Very Good)";
  final String experience   = "2+ Years Production Mobile Experience";

  final List<String> coreExpertise = [
    "Production Mobile Apps (4+ apps published on Play Store & App Store)",
    "Open-Source Flutter Package Author (pub.dev: 160/160 Pub Points)",
    "Clean Architecture · MVVM · Repository Pattern · SOLID",
    "BLoC / Cubit Reactive State Management",
    "Firebase Suite · REST APIs · WebSockets · Google Maps SDK",
    "Automated CI/CD Pipelines (GitHub Actions & Fastlane)",
  ];

  String get currentFocus => "Architecting scalable cross-platform mobile apps"
                             " & creating high-impact open-source Flutter tools 💙";

  bool get openToWork => true; // Remote · Freelance · Long-term Contracts
}
```

> **Bio:** Flutter Developer with 2+ years of production experience shipping 4 mobile apps on Google Play and the Apple App Store. Author of `adaptive_video_player` on pub.dev. Specializing in Clean Architecture, BLoC/Cubit state management, Firebase cloud services, REST/WebSocket integration, and automated CI/CD deployment pipelines.

---

## 📈 Impact at a Glance

| Metric | Stat |
|---|---|
| 🚀 **Production Apps Shipped** | **4+ Apps** (Google Play & App Store) |
| 📦 **Pub.dev Package Downloads** | **376+ Downloads** |
| 💯 **Pub Points Score** | **160 / 160** (100% Quality Score) |
| 🎓 **Academic Grade** | **Very Good (Graduation Project: Excellent)** |

---

## 📦 Open Source Packages

### 🎥 [adaptive_video_player](https://pub.dev/packages/adaptive_video_player) `v1.3.1`

[![pub package](https://img.shields.io/pub/v/adaptive_video_player.svg)](https://pub.dev/packages/adaptive_video_player)
[![Likes](https://img.shields.io/pub/likes/adaptive_video_player?logo=dart)](https://pub.dev/packages/adaptive_video_player/score)
[![Pub Points](https://img.shields.io/pub/points/adaptive_video_player?logo=dart)](https://pub.dev/packages/adaptive_video_player/score)
[![Downloads](https://img.shields.io/pub/dm/adaptive_video_player)](https://pub.dev/packages/adaptive_video_player)

> **The only Flutter video player supporting YouTube + direct video URLs (MP4, MKV, WebM, HLS) across all 6 platforms with a single unified widget.**

- 🔀 **Smart Auto-Detection** — YouTube vs MP4/HLS/WebM chosen automatically.
- 📺 **YouTube Features** — Custom mobile controls, native controls on Desktop & Web, live stream viewer count, force HD, captions.
- 🎞️ **Direct Video** — Quality picker, SRT/VTT subtitles, local files, in-memory bytes, custom UI overlays.
- 🖥️ **All 6 Platforms** — Android · iOS · Web · macOS · Windows · Linux.

```dart
AdaptiveVideoPlayer(
  config: VideoConfig(
    videoUrl: 'https://youtu.be/VIDEO_ID', // or any .mp4 / .m3u8 URL
  ),
)
```

[![pub.dev](https://img.shields.io/badge/pub.dev-adaptive__video__player-00B4D8?style=for-the-badge&logo=dart&logoColor=white)](https://pub.dev/packages/adaptive_video_player)
[![GitHub](https://img.shields.io/badge/GitHub-source-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmedalam782/vidoes_player)

---

### 🗺️ [osm_location_picker](https://pub.dev/packages/osm_location_picker) `v1.0.4`

[![pub package](https://img.shields.io/pub/v/osm_location_picker.svg)](https://pub.dev/packages/osm_location_picker)
[![Pub Points](https://img.shields.io/pub/points/osm_location_picker?logo=dart)](https://pub.dev/packages/osm_location_picker/score)
[![Downloads](https://img.shields.io/pub/dm/osm_location_picker)](https://pub.dev/packages/osm_location_picker)

> **No API key. No account. No billing.** A self-contained location picker powered by OpenStreetMap & Nominatim.

- 🗺️ Interactive map using `flutter_map` with smooth pan & zoom.
- 🔍 Address search via Nominatim reverse geocoding & one-tap GPS jump.
- 🎨 Themeable UI via `LocationPickerTheme` + built-in Arabic & English localization.
- 🏗️ BLoC/Cubit state management — zero global state pollution.

```dart
final LocationModel? result = await Navigator.of(context).push<LocationModel>(
  MaterialPageRoute(builder: (_) => const LocationPickerView()),
);

print(result?.address);           // "Baghdad, Iraq"
print(result?.latLng?.latitude);  // 33.315241
```

[![pub.dev](https://img.shields.io/badge/pub.dev-osm__location__picker-00B4D8?style=for-the-badge&logo=dart&logoColor=white)](https://pub.dev/packages/osm_location_picker)
[![GitHub](https://img.shields.io/badge/GitHub-source-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ahmedalam782/osm_location_picker)

---

## 🚀 Featured Production Apps

### 🛒 1. Balsan — E-Commerce & Smart Appliance Marketplace
> Full-featured marketplace for air conditioners & home appliances featuring live catalog browsing, cart checkout flows, and real-time order tracking.

- 🏗️ **Architecture:** Clean Architecture + MVVM + BLoC/Cubit + GetIt DI
- 🗺️ **Features:** Interactive Google Maps store locator & delivery tracker, wishlist, FCM push notifications, offline caching
- 📱 **Platforms:** Released on Google Play & Apple App Store

[![Play Store](https://img.shields.io/badge/Play_Store-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.mdsoft.balsan2)
[![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/eg/app/al-balsan/id6747080711)
[![Website](https://img.shields.io/badge/Website-00B4D8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://www.al-balsan.com)

---

### 🏥 2. VA Note Clinic — Healthcare & Patient Management
> Clinical workflow and patient record management system with per-visit electronic health records and automated appointment reminders.

- 🏗️ **Architecture:** Clean Architecture + MVVM + Cloud Firestore
- 📅 **Features:** Electronic health records, diagnostic history, automated FCM appointment reminders, role-based clinic staff access
- 📱 **Platforms:** Released on Google Play & Apple App Store

[![Play Store](https://img.shields.io/badge/Play_Store-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.mdsoft.vanotesclinic)
[![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/us/app/va-note/id6759074915)
[![Website](https://img.shields.io/badge/Website-00B4D8?style=for-the-badge&logo=google-chrome&logoColor=white)](https://va-note.com/clinic/)

---

### 🚖 3. Taxi Beirut — Ride-Hailing System & FinTech Ecosystem
> Two-app ecosystem: Customer ride-booking app + Agent merchant wallet dashboard.

- 📍 **Features:** Real-time ride tracking via Google Maps SDK, dynamic fare engine, VOIP push dispatch alerts, QR Code merchant wallet top-ups
- 📱 **Customer App:** [![Play Store](https://img.shields.io/badge/Play_Store-414141?style=flat-square&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.taxi.md_soft.taxi_customer_app) [![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=flat-square&logo=app-store&logoColor=white)](https://apps.apple.com/eg/app/%D8%AA%D9%83%D8%B3%D9%8A-%D8%A8%D9%8A%D8%B1%D9%88%D8%AA/id6748995437)
- 💼 **Agent App:** [![Play Store](https://img.shields.io/badge/Play_Store-414141?style=flat-square&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.mdsoft.taxibeirutagent) [![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=flat-square&logo=app-store&logoColor=white)](https://apps.apple.com/eg/app/taxi-beirut-agent/id6760011080)

---

### 🏫 4. Iraqi Private Schools (IPS) — EdTech & School Administration
> Institutional school management application connecting administrators, teachers, and guardians.

- 🔔 **Features:** Daily student attendance check-ins, absence notifications, academic event calendar, targeted class announcements
- 📱 **Platforms:** Released on Google Play & Apple App Store

[![Play Store](https://img.shields.io/badge/Play_Store-414141?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.mdsoft.iraqi_private_schools)
[![App Store](https://img.shields.io/badge/App_Store-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)](https://apps.apple.com/app/iraqi-private-schools-ips/id6751548277)

---

## 💼 Professional Experience

```
💼 Flutter Developer @ MDSoft (Jan 2025 – Present | Full-Time | Egypt)
  • Architected & deployed 4 production apps on Google Play & App Store.
  • Created & published adaptive_video_player on pub.dev.
  • Set up automated GitHub Actions CI/CD deployment pipelines.

🎓 Flutter Developer (Tech Dept & Bootcamp) @ Elevate Tech (Oct 2025 – Mar 2026 | Remote)
  • Worked as Flutter Developer in Tech Dept (Official Experience Certificate issued).
  • Advanced Bootcamp Training in Clean Architecture, BLoC, Dependency Injection (GetIt), & SOLID.

💻 IT & RMS Support Specialist @ Total Stores (Jun 2022 – Aug 2023 | Full-Time | Egypt)
  • Automated customer follow-up email workflows and compiled SQL relational insights.
```

---

## 📜 Verified Certificates & Education

- 🏆 **Official Experience Certificate (Flutter Developer)** — Elevate Tech Dept (Issued Jun 2026)
- 🎓 **Flutter Advanced Bootcamp Training Program** — Elevate Tech (Jun 2026)
- 🎖️ **AMIT Flutter Diploma** — 125-Hour Intensive | **Grade: 99% Distinction** (Jan 2024)
- 📜 **Route IT Center Flutter Development Diploma** (Sep 2024)
- 🔬 **UC San Diego & Coursera Data Structures & Algorithms** — 6-Course Specialization (Apr 2020)
- 🎓 **B.Sc. Computer Science** — Benha University, Faculty of Science | **Grade: Very Good** (Sep 2020)

---

## 🛠️ Tech Stack

### 📱 Mobile & Core Languages
![Flutter](https://img.shields.io/badge/Flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white)
![Dart](https://img.shields.io/badge/Dart-0175C2?style=for-the-badge&logo=dart&logoColor=white)
![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)

### 🏗️ State & Architecture
![Clean Architecture](https://img.shields.io/badge/Clean_Architecture-00B4D8?style=for-the-badge&logoColor=white)
![Bloc/Cubit](https://img.shields.io/badge/Bloc%2FCubit-13B9FD?style=for-the-badge&logo=flutter&logoColor=white)
![MVVM](https://img.shields.io/badge/MVVM-6C757D?style=for-the-badge&logoColor=white)
![GetIt / Injectable](https://img.shields.io/badge/GetIt_%2F_Injectable-8338EC?style=for-the-badge&logoColor=white)

### 🔥 Backend, Cloud & APIs
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Cloud Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![FCM](https://img.shields.io/badge/Firebase_FCM-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![WebSockets](https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socketdotio&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge&logo=google-maps&logoColor=white)

### ⚙️ DevOps & Tooling
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Google Play Console](https://img.shields.io/badge/Google_Play_Console-414141?style=for-the-badge&logo=google-play&logoColor=white)
![App Store Connect](https://img.shields.io/badge/App_Store_Connect-0D96F6?style=for-the-badge&logo=app-store&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white)

---

## 📊 GitHub Stats

<div align="center">

<img src="https://komarev.com/ghpvc/?username=ahmedalam782&label=Profile+Views&color=00b4d8&style=flat-square" alt="Profile views" />

<br /><br />

<img src="https://github-profile-trophy.vercel.app/?username=ahmedalam782&theme=algolia&no-frame=true&margin-w=10&column=6" alt="Trophies" />

<br />

<img src="https://github-readme-stats.vercel.app/api?username=ahmedalam782&show_icons=true&theme=tokyonight&hide_border=true&include_all_commits=true&count_private=true" height="180em" />
<img src="https://github-readme-stats.vercel.app/api/top-langs?username=ahmedalam782&layout=compact&theme=tokyonight&hide_border=true" height="180em" />

<br />

<img src="https://github-readme-streak-stats.herokuapp.com?user=ahmedalam782&theme=tokyonight&hide_border=true" />

</div>

---

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/ahmedmohamedalam)
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ahmedalam4887482@gmail.com)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/201559555092)
[![pub.dev](https://img.shields.io/badge/pub.dev-00B4D8?style=for-the-badge&logo=dart&logoColor=white)](https://pub.dev/packages/adaptive_video_player)

</div>

---

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0077b6,100:00b4d8&height=120&section=footer&animation=fadeIn" width="100%" />

*"Architecting high-performance cross-platform mobile solutions — built with purpose, shipped with pride."*

</div>

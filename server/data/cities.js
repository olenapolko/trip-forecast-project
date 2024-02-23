const cities = [
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/athens_vmn2zj.webp",
    name: "Athens",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/amsterdam_gmwsvq.webp",
    name: "Amsterdam",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896294/berlin_gpdavg.webp",
    name: "Berlin",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/bern_ukkfdg.webp",
    name: "Bern",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/brusel_etxa1o.webp",
    name: "Brusel",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/buenos-aires_tysks3.webp",
    name: "Buenos Aires",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/cairo_gkkkez.webp",
    name: "Cairo",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/cherkasy_haarrl.webp",
    name: "Cherkasy, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/chernihiv_ioynpj.webp",
    name: "Chernihiv, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/chernivtsi_ut3qbw.webp",
    name: "Chernivtsi, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/dakka_ursi9e.webp",
    name: "Dakka",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896295/dnieper_if3lz7.webp",
    name: "Dnipro, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/ivano-frankivsk_jgfiol.webp",
    name: "Ivano Frankivsk, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kharkiv_bxliqw.webp",
    name: "Kharkiv, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kherson_hbkllt.webp",
    name: "Kherson, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/khmelnytskyi_qz5qh7.webp",
    name: "Khmelnytskyi, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kropyvnytskyi_mj5dni.webp",
    name: "Kropyvnytskyi, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/kyiv_ccp4ol.webp",
    name: "Kyiv, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/london_ecoew4.webp",
    name: "London",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/lutsk_aqswi3.webp",
    name: "Lutsk, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896296/lviv_nmabt2.webp",
    name: "Lviv, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/madrid_biovqo.webp",
    name: "Madrid",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/mehiko_m2kee4.webp",
    name: "Mehiko",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/mumbai_svcccq.webp",
    name: "Mumbai",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/mykolaiv_nenbjb.webp",
    name: "Mykolaiv, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/new-york_zmn3rd.webp",
    name: "New York",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/odesa_lgyuds.webp",
    name: "Odesa, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896297/osaka_lppmit.webp",
    name: "Osaka",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/peking_fxbqux.webp",
    name: "Peking",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/poltava_waw7yq.webp",
    name: "Poltava, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/rivne_h96ykl.webp",
    name: "Rivne, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/sao-paulo_rbtjrp.webp",
    name: "Sao Paulo",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/shanghai_u9yewr.webp",
    name: "Shanghai",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/sumy_ukbfdc.webp",
    name: "Summy, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/ternopil_prihkq.webp",
    name: "Ternopil, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/tokio_tjuk5r.webp",
    name: "Tokio",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/uzhhorod_v5lo8p.webp",
    name: "Uzhhorod, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/vinnicia_smj7q1.webp",
    name: "Vinnytsia, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896299/zaporizhzhia_yuy47w.webp",
    name: "Zaporizhzhia, Ukraine",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/dj6mkr2e6/image/upload/v1690896298/zhitomir_p4aniv.webp",
    name: "Zhytomyr, Ukraine",
  },
];

export default cities;

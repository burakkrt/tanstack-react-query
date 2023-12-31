export interface IRootParams {
  city?: string;
}

export interface IRootFetch {
  status: string;
  message: string;
  rowCount: number;
  data: Array<IMuseum>;
}

export interface IMuseum {
  calismaSaatleri?: string;
  girisDetay?: string;
  ilce?: string;
  latitude?: number;
  longitude?: number;
  muzeAciklama?: string;
  muzeAd?: string;
  muzeAdres?: string;
  muzeMail?: string;
  muzeTel?: string;
  muzeWebSite?: string;
  sehir?: string;
}

import React, { useState } from "react";
import * as Style from "./module.styled";
import { Typography, Button } from "antd";
import { ArrowsAltOutlined, ShrinkOutlined } from "@ant-design/icons";

const HomeHeader = () => {
  const [rows, setRows] = useState(2);

  const handleDescRowsMinimize = () => {
    setRows(2);
  };
  const handleDescRowsMaxsimize = () => {
    setRows(10);
  };

  const descContent =
    "React Query, React uygulamalarında state yönetimi ve API çağrıları gibi çeşitli durum yönetim görevlerini kolaylaştırmak için kullanılan bir kütüphanedir. Bu kütüphane, özellikle API çağrıları, önbellek yönetimi, veri önbelleği ve daha fazlası gibi konularda geliştiricilere yardımcı olmak için tasarlanmıştır. React Query, bir dizi hook sağlar ve bu hook'lar sayesinde bileşenlerinizdeki durumu yönetebilirsiniz. Ayrıca, otomatik olarak önbelleklenmiş verileri kullanarak tekrarlanan API çağrılarını optimize eder. React Query'nin diğer avantajları arasında asenkron işlemleri kolaylaştırması, çoklu durum yönetimi, ve önbellekleme stratejilerini özelleştirebilme imkanı bulunur. React Query, modern React uygulamalarında veri yönetimi için oldukça popüler bir seçenektir ve Tanner Linsley tarafından sürekli olarak güncellenmektedir. Kütüphanenin resmi dokümantasyonu ve örnekleri, kullanıcıların React Query'yi etkili bir şekilde kullanmalarına yardımcı olabilir.";

  return (
    <>
      <Typography.Title level={1} className={Style.appTitle}>
        TanStack -React Query.
      </Typography.Title>
      <Typography.Paragraph
        className={Style.reactQueryDesc}
        ellipsis={{
          rows,
          expandable: false,
        }}
        title={descContent}
      >
        {descContent}
      </Typography.Paragraph>
      <Button
        type="text"
        size="middle"
        onClick={rows <= 2 ? handleDescRowsMaxsimize : handleDescRowsMinimize}
        className={Style.headerButton}
      >
        {rows <= 2 ? "Genişlet " : "Daralt"}
        {rows <= 2 ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
      </Button>
    </>
  );
};

export default HomeHeader;

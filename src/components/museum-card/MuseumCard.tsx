import React, { useState } from "react";
import { IRootParams } from "./types";
import { Card, Divider, Typography, Button } from "antd";
import * as Style from "./module.style";

const MuseumCard: React.FC<IRootParams> = ({ data }) => {
  const [rows, setRows] = useState(5);

  const museumDesc = data?.muzeAciklama;

  return (
    <Card
      className={Style.card}
      title={data?.muzeAd}
      hoverable
      extra={data?.sehir}
    >
      <Typography.Paragraph
        className={Style.desc}
        ellipsis={{ rows, expandable: false }}
        title={museumDesc}
      >
        {museumDesc}
      </Typography.Paragraph>
      <div className={Style.moreButton}>
        <Button
          type="text"
          onClick={() => (rows > 5 ? setRows(5) : setRows(15))}
        >
          {rows > 5 ? "Küçült" : "Devamını Oku"}
        </Button>
      </div>
      <Divider />
      <div className={Style.infos}>
        <Typography.Paragraph>{data?.muzeAdres}</Typography.Paragraph>
        <Typography.Paragraph>{data?.muzeTel}</Typography.Paragraph>
        <Typography.Paragraph>{data?.muzeMail}</Typography.Paragraph>
      </div>
    </Card>
  );
};

export default MuseumCard;

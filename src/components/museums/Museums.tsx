import React, { useEffect, useRef, useState } from "react";
import { IMuseum } from "@/services/types";
import Link from "next/link";
import MuseumCard from "../museum-card";
import { fetchMuseum } from "@/services/museum";
import cities from "@/shared/cities.json";

import { useQuery, useMutation, QueryClient } from "@tanstack/react-query";

import { Flex, Typography, Row, Col, AutoComplete } from "antd";

const Museums = () => {
  const [country, setCountry] = useState("");

  const query = useQuery({
    queryKey: ["museuum"],
    queryFn: fetchMuseum,
    staleTime: 15000,
  });

  useEffect(() => {
    // console.log(country);
  }, [country]);

  // console.log("API RESPONSE:", query.data);

  return (
    <>
      {/* <AutoComplete
        style={{ width: 200 }}
        options={cities.data}
        placeholder="Lütfen bir il seçin."
        value={country}
        onFocus={() => setCountry("")}
        onChange={(value) => setCountry(value)}
        filterOption={(inputValue, option) =>
          option!.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      /> */}
      <Row gutter={16}>
        {query.data?.data?.map((museum, index) => (
          <Col span={8} key={index}>
            <MuseumCard data={museum} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Museums;

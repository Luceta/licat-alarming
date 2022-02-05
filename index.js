const axios = require("axios");

exports.handler = async (event) => {
  try {
    const dogPicRequest = await axios.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    const dogImgUrl = dogPicRequest.data.message;

    const notice = {
      content: "안녕하세요. QR을 찍어주세요!",
      embeds: [
        {
          author: {
            name: "출결 알리미 : 귀여운 강아지 알리미",
            url: "https://dog.ceo/dog-api/",
            icon_url: "",
          },
          title: "강아지 이미지",
          description: "from by[Dog API](https://dog.ceo/dog-api)",
          image: {
            url: dogImgUrl,
          },
        },
      ],
    };

    const rest = {
      content: "강사님 ! 쉬는 시간입니다~ 이제는 우리가 쉬어가야 할 시간!",
      embeds: [
        {
          image: {
            url: "https://c.tenor.com/89uiKKZSlqUAAAAM/chill-chillax.gif",
          },
        },
      ],
    };

    const discordChannel =
      "https://discord.com/api/webhooks/909481603615584287/3AvFFe2h5Sp6KCn4uqqrwtSBJBq9JltIycTRxSF1qMWPoKiC9E5SHm5levTIpqGGK_ee";

    if (event.bot === "notice") {
      const result = await axios.post(discordChannel, notice);
    }

    if (event.bot === "rest") {
      const result = await axios.post(discordChannel, rest);
    }

    console.info("디스코드 웹훅 성공");
  } catch (err) {
    console.log("디스코드 웹훅 실패", err);
  }
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};

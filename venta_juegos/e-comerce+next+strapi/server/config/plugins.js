module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
            accessKeyId: "AKIAWYWHCFP6P5ACAUY4",
            secretAccessKey: "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",
            region: "us-east-2",
            params: {
              Bucket:"ecommerce-strapi-games-ferretweb2",
            },
          },
        },
    },
    // ...
  });

  ///Se realizó cambio
<template>
  <div class="payment">
    <a class="payment_back" @click="goBack()">Go Back</a>
    <button @click="pay" class="payment_btn">Make Payment</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inlineUrl: process.env.VUE_APP_FLW_INLINE,
      flwKey: process.env.VUE_APP_PUBLIC_KEY,
      amount: "10000",
      currency: "NGN",
      customer: {
        name: "Jake Doe",
        email: "jakedoe@mailinator.com",
      },
      customizations: {
        title: "Raenna",
        description: "Payment for jewelry",
        logo: "https://i.ibb.co/vjMY85W/Dasdas-Logo-1.jpg",
      },
      paymentMethod: "card,mobilemoney,ussd",
    };
  },
  created() {
    const script = document.createElement("script");
    script.src = this.inlineUrl;
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  computed: {
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    },
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    pay() {
      window.FlutterwaveCheckout({
        public_key: this.flwKey,
        tx_ref: this.reference,
        amount: this.amount,
        currency: this.currency,
        payment_options: this.paymentMethod,
        customer: {
          name: this.customer.name,
          email: this.customer.email,
        },
        callback: (response) => {
          console.log(response);
        },
        customizations: {
          title: this.customizations.title,
          description: this.customizations.description,
          logo: this.customizations.logo,
        },
      });
    },
  },
};
</script>

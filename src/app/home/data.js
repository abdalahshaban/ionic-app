module.exports = {
  ikhair: {
    country: [
      {
        '-causes': {
          cause: [
            {
              '-targetAmount': 10000,

              organization: {
                paymentMethods: {
                  Bank: [],

                  SMS: [
                    {
                      '-operatorEn': 'etisalat',

                      '-shortcode': 5115,

                      '-keyword': '175_IKHAIRCAUSE',

                      '-operator': 'إتصالات',

                      '-price': 20
                    },
                    {
                      '-operatorEn': 'du',

                      '-shortcode': 5115,

                      '-keyword': '175_IKHAIRCAUSE',

                      '-operator': 'دو',

                      '-price': 20
                    },
                    {
                      '-operatorEn': 'etisalat',

                      '-shortcode': 6226,

                      '-keyword': '175_IKHAIRCAUSE',

                      '-operator': 'إتصالات',

                      '-price': 50
                    },
                    {
                      '-operatorEn': 'du',

                      '-shortcode': 6226,

                      '-keyword': '175_IKHAIRCAUSE',

                      '-operator': 'دو',

                      '-price': 50
                    }
                  ]
                },

                '-id': 'IHSAN_AE'
              },

              '-collectedAmount': 4000,

              '-name': 'حالة مرضية عاجلة',

              '-info':
                'أم لأربع أطفال تعرضت لحادث سيارة أدى لإصابتها إصابة بليغة في أعصاب الظهر وتحتاج لإجراء عملية عاجلة بقيمة 45000 درهم. لا يوجد أي مصدر دخل للأسرة بعد توقف الأم عن العمل بعد الحادث. تصدق الآن',

              '-contact': 'NA',

              '-nameEn': 'NA',

              '-id': '3elag'
            }
          ]
        },

        '-id': 'AE'
      }
    ]
  }
};

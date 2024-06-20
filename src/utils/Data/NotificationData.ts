const notificationData = [
    {
        id: 1,
        name: 'Aarush Galloway',
        desc: 'Shared your post',
        pic: 'https://s3-alpha-sig.figma.com/img/043c/39bc/09dd82dfd6a572cd5caad060012fec5a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FN21EL7Bf6OxxY1bgElSZJl~490~5cpc-tlRp8512RGCtOYm2npOwLLxTZhMIfi-F54DvuowQcs0Ff143GxTrLaTdgAQgWY~Z2Z2mwueWw3lhe6eYMY~JFaWPm2bhnsX81asBHV~qGrYl-hahSsbL1xosX8h53v2kWk1kSjx5BBaOkAT2eLaCzdkNGHSoPwX472vvtQnaXNUsNdV4RmGwa2MkOhNWoPd2C9rIY7Xf8Jc0MyRfqW3iNlrf~34KPOTAFiv5zqQQpmuV9JQ6qvEd0wapq-7ueWGjT1BsccLtIayS9PishNXnWe9L5GAPeILoxsWnl2I-H~f~K-hm-X8yw__',
        time: '5h',
        read: false,

    },
    {
        id: 2,
        name: 'Arla Potter',
        desc: 'Liked your profile photo',
        time: '4h',
        read: true,
        pic: 'https://s3-alpha-sig.figma.com/img/6f58/889e/64b267f6681d45b9405519103ab2ad99?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EhR3amhPxfqDPTnyRNAKFSH6FesXNxdG9P86gkJnha44Qimxhtxuc4aic~-sqD18OmmA9HrNObxinFqWjNG4ZicTtuL7lrfFgIlSjF2UVTwnTjb-JM8t-grV-VmGMRi64cda1WvPZGu-~TKVFO5uqNnpYNXA1XJP1QFsYXJpjvswBbiQmC3a8MWv6NxRSPm~~i9efY4BOcFamZyaCH1In8n6Sp5ln6rIID44yAs7FpEGL-Gzc0iORLo5DaLAHokyHRDgAuWrT-F6L582H-dW1C2bwl3lHV2H8auorRu2cfRsJcMYpybjyPsLjLrrZpqSKRxV9qfOJ7axJh3e7dYBmg__'
    },
    {
        id: 3,
        name: 'Arthur Aguilar',
        pic: 'https://s3-alpha-sig.figma.com/img/2469/38c3/f62a0a15bc2f00ba94cf211edbea5815?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a6tOIzokC4hNCtsfGUfRHl3lrYWrcpSUMyKRTUXL95yYWa7ig2VgPkv-pYAUhGcyclGS4uzZGe8qjeLp~e1HtX4HY1-McVG~FuOI5k8GOgHoSh4aHAoKkx7x6gVbz99MrvGr~2G0Luqx0eiLCT7AO9lonGbmsY5o4xg0fGYnHiF37C6OHGfPH0IJwaWncRQy~OelW5ndPYnQGeua81oWHIgThtKpi85v-08WQBFTqxsk9TYOboTb6wvi3W4sCBCd3QxBSDEdoiHGpxAAB-HSMz755LRRk-nTippYr1Rci5ovF674nt8k9Bo6BPT2HAqNoHI2whoYktfb8ZVvbPmqdg__',
        desc: 'Liked your profile photo',
        time: '3h',
        read: false,

    },
    {
        id: 4,
        name: 'Addie Barrera',
        desc: 'Commend your post',
        pic: 'https://s3-alpha-sig.figma.com/img/7d18/3a18/db9c921a6f765916917c852e5596daff?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ki09GuUL-nvva6MfheWGYJ9qFHGMxYFOW2AP7FClNeXiTxdPpfgP1p51hhTeMgUs-GFgVb2Lyajwjs4pMDy9K~U0xbcIfW2aq58uLROftN9SdRwPXo3eegsR2oe5VP5kIdnM-8YURXraJ7pswRq9-C8TTfaFKojrUSgdbIB98kiEX7S5qdFZY5n~51FYSB2eICYynV5up0fgfJqmSS2YmPDJXmwE20DR4Je5LGwmx06mtaL32EhNM4vGvfTfTB-fO~MDdTSd7In5Y8kg4wevW2C9CFLnOyy6Iqi0w55TpiFZW0epCQOonjs6wQawTUKps3JSwVLLYj2qNFV0r5ge~A__',
        time: '3h',
        read: false,
    },
    {
        id: 5,
        name: 'Anne Southern',
        desc: 'added photo in group',
        pic: 'https://s3-alpha-sig.figma.com/img/a648/f5cd/4834cf826aa4d0c06edf47d423c1cd7c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qK00Xfwi4z~DLykrF9IvOZWV2hfcLzKvjcjlxyDzA4EmyB9vhGq3xux1DfNOMvaXydPBuUxpOFTFg74buMwhungPdT3hc5yWyPGY-GGpKiBVvHfyNwxhryMZUITmzHiSoYOkggtMyB4EiZQ6VHg56jV246qbiOVws9J-lHpFWLd07sCcIbRyOaeollXKvSLlhrVR0CMsVRNbp2HfpHXXC5j7nH3g3knP1wdNITDveXiAjZ-7lW-BS4IH81jbOvX-kK5z0UgkymT28myt7oqI-c6iumcImkp4YIycU8I1W8KC1iPX6dr7uMSDftwx6HuaZJOJD7PPx1-KgjuVTFevUQ__',
        groupName: 'Awesome UI Kit',
        time: '30min',
        read: false,
    },
    {
        id: 6,
        name: 'Brenden Ramirez',
        desc: 'Liked your post',
        pic: 'https://s3-alpha-sig.figma.com/img/10e7/7d88/97b5f74e16c02a6e261eb391ab60d7cc?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lz70z05cgOibiiEtNt43K2tFwQiWfmvNTf~6lb9Z4tHY3Gu5F9ZoGb8vIemSGPZLtDDvgXp69MCfY-goaPXSaP8yQRq3Iv8jug5NNppF-kteCUJ5CIXCbYreCoiu~0vDe2bAIPI5xQJz83h0QR14GYX5B4HZ4k5uVOlFH2yXFyqFwUbw3vnbMWvtLoqZy6hdSK4ngnYSMNFEkHYCoEkMVEn5X0jbl129obJDqwvE4ZmI6KXt3xFzBWyO7t8lg3iV9BMCO~p4uV9oczLAVz90g3KVpCUZTL~GHLo9oKNAUI83IZbb90Y0rkQaKf03Tm10ZkYHEreH7XmXEoqUdh6fmA__', time: '20min',
        read: false,

    }
    , {
        id: 7,
        name: 'Brax Stott',
        desc: 'Liked your comments',
        pic: 'https://s3-alpha-sig.figma.com/img/2359/94e2/e21c877cff781f030104091dc7d35bef?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZlU1suBAFsu9datTOH4uyeJmDHV83gDhQ~COju6h-fyKHQu1kO0BuVdxNyAlAMAQomtm6dNaSQvBAl5Ftgc4MBliySR0V9~RIuYfVF4tiMw4ru8Q7xjcy1duFsJVSfTLCqQt76HDRFEiFCOPA5Lf8MMSG6kyQw4H2rlNy3GnTR1Kcz1HzByWflspIVk9pZU1vCF3At9utPOOfxTfLmDakAW0ytEFypwcm7Ctt~QrjNrrUBxSZHF3KgnKTqGjj2Ng86loOjjVuma0nbBUZKvCOMjb~n4UPhH-O8Fuuu3aHCb9RQ6azWEf~fQhCs4zcmLSbQoDpGFd~2svQ5noNR2vnQ__',
        time: 'Just now',
        read: false,

    }

]
export default notificationData;
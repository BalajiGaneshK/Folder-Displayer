let fs = require('fs');
let http = require('http');
let express = require('express');
let app = express();
let folder = "./Files";
let result = '';


fs.readdir(folder, (err, files) => {
    if (err)
    {
     
        console.err(err);
    }

    else
    {
        let imgIconUrl = "data:image/png;base64,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";
        let folderIconUrl = "https://p1.hiclipart.com/preview/431/740/60/pop-folders-mini-yellow-folder-icon-art-png-clipart.jpg";
        let docIconUrl="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAllBMVEX///8Aark2icgAX7UAY7be6PMAYLXS5fKYudwAZ7gAZbfO3u76/f4AXLTt9fsGbLovgcSArddqoNHM2esAZbGlvt4AWp8pd7MfbakATIaKs9pDg8NalMsAcb2nxuO0z+cOfMMigsUAWp0AYam91eoddLhMjMjp8fgZZ6QMWZYAUZAvgL4RWpIlcasAc7oAV6V8pNJhmM2KPTNXAAAELElEQVR4nO3da3eaQBSFYYlIHLwba5oo0XptTWrj//9zxVy7ulCHwDn76NrvV13SpzPEEQErFcYYY4wxxhhjjLGLa92Q6KaGdr33MIqr5RdVW8kETXupPYpcINFgsPxhgdhOYhFfKpwvr6YGiKtQCBgMht+vrvCjOImkgMFglgrxxJXUHH0bQzhxLeb7EIL3xVpVXogdRRUhlKgjRE5UJSFwFLWEOKKaEEbUE6L2RUUhaBQ1hRiiqhAyUXWFCKKyEDBRtYX6RHWh+kTVF2qPIkCoTEQIdYkQoeq+iBFqjiJIqEhECfUmKkyoRsQJtSYqUKhERAp1JipUqDKKWKEGESxUIKKF8vsiXCg+inihNNGAUHiiWhDKjqIJoSjRhlCSaEQouC9aEcqNohmhGFFW+DOHUGqiygp/5REKEUWF881tLqLIRJUVzvINoghRUphO002uPVFkosoK57O7nMTyR1FU+EJ8esQSZYV74ubu6fetf4/bxVkJU+JwttncebcZ/qmflzAYDObz4XA29Gs2nJ+dcG/MVXh+wpxRSCGF+Cik8MvC+Oi1Ne7z4qnsy6ic99VVKGG8Wx97mWb9XRBnr5ybz75ElDBpn3ih8es1jG534PFmYlvoRqde6P51jOL+pQuDcFFpZmV9lvoLg6iTZOS8LwK0LywahRRSSCGF6b8wCjPyv22DeWHYq2XVWPkSrQvj1YHHvS+LNy98PvB4c+s5iNaFQefAPWkeLmZd6jrjrPxvTmFemE5Ul5Uv8ByEBaOQQgopPC10YZSRv9+8MB49ZFXvXMq61HUPbcj6mqbbPPFCvVPr0qXtden+MOjR2snbMe/pgf+KhvExTDfc/3akevI+Qm6a+YR7z80gv12Lsz66f/T5PHfqCWaFWlFIIYX4UEIXF834qi0Y94s2Nr2miRolbGrhdy9YiNBNS9mWFxA0hq6MTbUNj2HgVovCty9fjPx2RNSnp6j4DcxN/6XRjEIKKcQHW5cWz7YwXHaLtvU8kAFalz5knm+Yr7ofEbMu3ZayLctrmqSUbfl90Y0Rhr11u2jrvmVhEAadogWe5yrw/ZBCCvFRSOEXhXGrcFXTRzHifvF3/NrO8jt+p5RtceUNFAZRGbfj8DyHFvSXJtoW/gSceP6EHY9iSAn1opBCCvHx2zUZYTya3BRt0rW8polPnV3qk+VvuQ+e+JsvLyBqXVrGT4g3DI9h+vHpuVe0vteGgPc2OXr+rE++F6/x/ZBCCvFRSCGF+CikkEJ8FFJIIT4KKaQQH4UUUoiPQgopxEchhRTio5BCCvFRmLd2By36v2rJv39Y8bwKQq9OGWeY/ZvnmUpqRSVP0rSeqT0xHpU9hGk7Q8Rwe+pXl75Ur2pkX3StlQiwUrkeV6tZt8ZVrtWV+gX5fbVrfELjxxhjjDHGGGOMnXl/ASwK93DMPv2HAAAAAElFTkSuQmCC"

        app.get("/",(req, res) => {
            result += `<h1 style="text-align:center">Contents of ${folder} </h1>`;
            files.forEach(file => {
                
                let fileType = file.split(".")[1];
                let imgUrl;
                if (fileType == undefined)
                    imgUrl = folderIconUrl;
                
                else if (fileType == "docx")
                    imgUrl = docIconUrl;
                
                else if (fileType == "jpg" || fileType == "png")
                    imgUrl = imgIconUrl;
                    

                if(fileType!=="git")
                result += `<img src="${imgUrl}" width="20px" height="20px"> ${file} <br> `;
            });

            res.send(result);
        });
        app.listen(3000);       
    }
})




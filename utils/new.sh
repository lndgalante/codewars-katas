KATA=$1

PS3='Choose your kata kyu level: '
options=("1 Kyu" "2 Kyu" "3 Kyu" "4 Kyu" "5 Kyu" "6 Kyu" "7 Kyu" "8 Kyu")
select opt in "${options[@]}"
do
    case $opt in
        "1 Kyu")
            mkdir 1-kyu/"$KATA"
            cp utils/boilerplate.js 1-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 1-kyu/"$KATA"/index.test.js
            break
            ;;
        "2 Kyu")
            mkdir 2-kyu/"$KATA"
            cp utils/boilerplate.js 2-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 2-kyu/"$KATA"/index.test.js
            break
            ;;
        "3 Kyu")
            mkdir 3-kyu/"$KATA"
            cp utils/boilerplate.js 3-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 3-kyu/"$KATA"/index.test.js
            break
            ;;
        "4 Kyu")
            mkdir 4-kyu/"$KATA"
            cp utils/boilerplate.js 4-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 4-kyu/"$KATA"/index.test.js
            break
            ;;
        "5 Kyu")
            mkdir 5-kyu/"$KATA"
            cp utils/boilerplate.js 5-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 5-kyu/"$KATA"/index.test.js
            break
            ;;
        "6 Kyu")
            mkdir 6-kyu/"$KATA"
            cp utils/boilerplate.js 6-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 6-kyu/"$KATA"/index.test.js
            break
            ;;
        "7 Kyu")
            mkdir 7-kyu/"$KATA"
            cp utils/boilerplate.js 7-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 7-kyu/"$KATA"/index.test.js
            break
            ;;
        "8 Kyu")
            mkdir 8-kyu/"$KATA"
            cp utils/boilerplate.js 8-kyu/"$KATA"/index.js
            cp utils/boilerplate.test.js 8-kyu/"$KATA"/index.test.js
            break
            ;;
        *) echo invalid option;;
    esac
done

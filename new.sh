KATA=$1

PS3='Choose your kata kyu level: '
options=("8 Kyu" "7 Kyu" "6 Kyu" "5 Kyu")
select opt in "${options[@]}"
do
    case $opt in
        "8 Kyu")
            mkdir 8-kyu/"$KATA"
            cp boilerplate.js 8-kyu/"$KATA"/index.js
            cp boilerplate.test.js 8-kyu/"$KATA"/index.test.js
            break
            ;;
        "7 Kyu")
            mkdir 7-kyu/"$KATA"
            cp boilerplate.js 7-kyu/"$KATA"/index.js
            cp boilerplate.test.js 7-kyu/"$KATA"/index.test.js
            break
            ;;
        "6 Kyu")
            mkdir 6-kyu/"$KATA"
            cp boilerplate.js 5-kyu/"$KATA"/index.js
            cp boilerplate.test.js 5-kyu/"$KATA"/index.test.js
            break
            ;;
        "5 Kyu")
            mkdir 5-kyu/"$KATA"
            cp boilerplate.js 5-kyu/"$KATA"/index.js
            cp boilerplate.test.js 5-kyu/"$KATA"/index.test.js
            break
            ;;
        *) echo invalid option;;
    esac
done

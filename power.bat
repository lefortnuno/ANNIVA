cd C:\Users\~Trofel~\Desktop\HBD

git add *

set /p commitMessage="Titre du commit : "

git commit -m "%commitMessage%"
git push 
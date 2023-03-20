# Cheat Sheet

### Git

```bash
ls -la | grep <keyword> # grep is not ctrl + f, 
# when you use this command # instead you are searching 
# for a keyword inside of the ls -la result. 
```

### Postgres

#### error with postgress .pid file

```zsh
brew services stop postgresql@14
cd usr/local/var/postgres # This is where the .pid file lives
rm postmaster.pid # delete .pid
brew services start postgresql@14 # start Postgres again
```
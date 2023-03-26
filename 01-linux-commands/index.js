/*
* how to execute two or more commands in simultaneous
*   - <command 1> && <command 2>
*   - <command 1> ; <command 2>
*
*
* how to loop to (create, delete, etc) multiple file names at once
*   - touch test-{1..7}.txt -> important only use 2 dots
*
*
* [x] ls
*   1 - list all directories
*
*
* [x] ls -lh
*   1 - list all directories in a formated way, with more files info like size, rwx status, etc.
*
*
* [x] alias
*   1 - if does not receive any param, "it list all available aliases"
*   2 - lets you defined temporary aliases for your commands (just during session)
*       - sintax:
*           alias <name>="<value>"
*           eg: alias lsh="ls -lh" (alias con nombre lsh)
*
*
* [x] unalias
*   1 - remove an alias defined by its name
*       - sintax:
*           unalias <alias name>
*
*
* [x] pwd
*   1 - print working directory, outputs the absolute path of the dir you're in. 
*
*
* [x] cd
*   1 - change directory
*
*
* [x] cp
*   1 - copy files and directories   
*
*
* [x] rm -r <directory>
*   1 - deletes not empty directories recursively
*
*
* [x] rm <directory or file>
*   1 - deletes a file or directory
*
*
* [x] mv <directory or file>
*  1 - moves a file or directory
*  2 - renames a file or directory
*
*
* [x] man <command>
*   1 - lists a manual for the specified command if exists
*
*
* [x] touch -m <file>
*   1 - updated the modifiction date of the file to the current date
*
*
* [x] chmod <+"mode (r:read, w:write, x:execute, etc)">
*   1 - lets you change the mode of a file (permissions) quickly
*       - sintax:
*           chmod +x <file or dir>
*       - note:
*           use always hashbang to make a file executable
*
*
* [x] exit
*   1 - quit your terminal session, and can even close your terminal
*
*
* [x] shutdown <time>
*   1 - turn of your pc or can reboot it, this can be done inmediately or can schedule
*       - sintax:
*           shutdown now
*           shutdown 20:40 -> it will turn off when time equals 20:40
*
*
* [x] shutdown -c
*   1 - use to cancel any shutdown
*
*
* [x] unzip
*   1 - allows to extract content from .zip files
*
*
* [x] apt install <app> (ubuntu base distros)
*   1 - is a package manager that lets you download apps for your linux
*
*
* [x] echo "<string>"
*   1 - displays a defined text in the terminal
*
*
* [x] cat
*   1 - lets you create, view, and concatenate files directly (text will be display in terminal, if any other file saves this result)
*       - sintax:
*           cat <file-1> <file-2> -> output these files text concatenated
*           cat <file-1> <file-2> " > " <file-3> -> the resulting text is dump in the specified "file-3"
*
*
* [x] ps
*   1 - lets you look at all processes your shell session is running (it shows PID:process id, CMD:commands, etc)
*
*
* [x] kill <PID or binary name>
*   1 - you can close any unresponsive process
*       - sintax:
*           kill 533494
*           kill firefox
*
*
* [x] ping <domain name or IP>
*   1 - use to test network connectivity
*
*
* [x] history
*   1 - shows a history of al the commands typed in terminal
*
*
* [x] passwd
*   1 - changes your linux user's password
*
*
* [x] which <executable name>
*   1 - lets you know the full path of a shell command
*       - sintax:
*           which python
*
*
* [x] shred <file>
*   1 - makes a file impossible to recover (it fucks up the file's text content)
*       - sintax:
*           shred text.txt
*
*
* [x] shred -u <file>
*   1 - used to delete the file right away
*       - sintax:
*           shred -u test.txt
*
*
* [x] more <file>
*   1 - lets you inspect a file by chunks
*       - sintax:
*           more test.txt
*
*
* [x] less <file>
*   1 - lets you inspect a file backwards and forward
*       - sintax:
*           less test.txt
*
*
* [x] head <flag number of lines> <file>
*   1 - shows you a specific number of lines in a file (starting from top to bottom)
*       - sintax:
*           head -n 5 test.txt
*
*
* [x] tail <flag number of lines> <file>
*   1 - shows you a specific number of lines in a file (starting from bottom to top)
*       - sintax:
*           tail -n 5 test.txt
*
*
* [x] grep <string to match> <file>
*   1 - searches for lines that match a string or a regular espression, and print them
*       - sintax:
*           grep "line" test.txt
*
*
* [x] grep -c <string to match> <file>
*   1 - searches for lines that match a string or a regular espression, and count them then prints them
*       - sintax:
*           grep -c "line" test.txt
*
*
* [x] whoami
*   1 - prints the username currently in use
*
*
* [x] whatis <command>
*   1 - prints a single-line description of any other command
*
*
* [x] wc <file>
*   1 - prints the number of lines, words and byte-size (returns a count)
*
*
* [x] uname -a
*   1 - prints the os system info
*
*
* [x] find <folder path where to start to search> <flags, filters to search (-name)> <expresion>
*   1 - searches for files in a directory, based on regex or string expressions
*       - sintaxis:
*           find ./ -name "test.txt"
*
*
* [x] wget <url>
*   1 - is use to retrieve content from internet
*   
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*
*/


// como ejecutar un comando despues de otro
// como enviar archivos elmininados al bin enves de directamente eliminarlo
// whoami
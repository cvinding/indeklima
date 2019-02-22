<?php
/**
 * Class Autoloader
 * @author Christian Vinding Rasmussen
 * //TODO: description needed
 */
class Autoloader {
    /**
     * register() is the detector of which class needs to be required
     */
    public static function register(){
        spl_autoload_register(function ($class) {
            $file = "..".DIRECTORY_SEPARATOR.self::getClassPath($class.".php");
            if (file_exists($file)) {
                require $file;
            }
        });
    }
    /**
     * getClassPath() returns the path to the detected class
     * @param string $className
     * @return string
     */
    private static function getClassPath(string $className) : string {
        $explodedClass = explode(DIRECTORY_SEPARATOR, str_replace("\\", DIRECTORY_SEPARATOR, $className));
        $pathToClass = "";
        for($i = 0; $i < (sizeof($explodedClass) - 1); $i++){
            $pathToClass .= strtolower($explodedClass[$i]).DIRECTORY_SEPARATOR;
        }
        $pathToClass .= lcfirst($explodedClass[sizeof($explodedClass) - 1]);
        return $pathToClass;
    }
}
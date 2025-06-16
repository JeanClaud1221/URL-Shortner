package com.shortUrl.Short.Utility;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

public class Encoder {
    private static String chars="1234567890qwertyuiopasdfghjklzxcvbnnmQWERTYUIOPASDFGHJKLZXCVBNM";
    private static int randomLength=3;
    public static String generateShort(String url){
        String md5=generateMD5(url);
        String random=generateRandom(randomLength);
        String res= md5+random;
        return res.substring(0,7);

    }

    public static String generateMD5(String url){
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            byte[] digest = md.digest(url.getBytes());
            StringBuilder sb=new StringBuilder();
            for (byte b :digest){
                sb.append(String.format("%02x",b));
            }
            return sb.toString();
        }catch (NoSuchAlgorithmException e){
            throw new RuntimeException("Couldn't generate md5");
        }

    }

    public static String generateRandom(int len){
        StringBuilder sb=new StringBuilder();
        Random rnd=new Random();
        for (int i=0;i<len;i++){
            sb.append(chars.charAt(rnd.nextInt(chars.length())));
        }
        return sb.toString();
    }
}

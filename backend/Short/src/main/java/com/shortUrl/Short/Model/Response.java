package com.shortUrl.Short.Model;

import org.springframework.web.servlet.tags.EditorAwareTag;

public class Response {
    private String data;
    public Response(){}
    public Response(String data){
        this.data=data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getData() {
        return data;
    }
}

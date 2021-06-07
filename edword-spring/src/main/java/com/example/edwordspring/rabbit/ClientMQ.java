package com.example.edwordspring.rabbit;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/rabbit")
public class ClientMQ {
    @Autowired
    private RabbitTemplate rabbitTemplate;


    @GetMapping("/receiveNotification")
    public String get(){
        Random random = new Random();
        String queueName = "spamer" + random.nextInt(10);
        Object message =rabbitTemplate.receiveAndConvert(queueName);
       if (message != null)
        return message.toString();
       else
           return "";

    }
}

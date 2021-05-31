package com.example.edwordspring.rabbit;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Random;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value = "/rabbit")
public class PublisherMQ {

    @Autowired
    private RabbitTemplate rabbitTemplate;
    @Autowired
    private RabbitMessageQueueMenager rabbitMessageQueueMenager;

@GetMapping("/addNotification")
    public String get(@RequestParam String message){

    Random random = new Random();
    String queueName = "spamer" + random.nextInt(10);

    rabbitMessageQueueMenager.putNewQueue(queueName);
    rabbitTemplate.convertAndSend(queueName, message);
    return message;
    
}

}

package com.lambag.subscribe.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lambag.subscribe.service.model.Subscribe;
import com.lambag.subscribe.service.repository.SubscribeRepository;

@Service
public class SubscribeService {
	
	@Autowired
	private SubscribeRepository subscribeRepository;
	
	public List<Subscribe> getAllSubscribeServices(){
		return subscribeRepository.findAll();
	}
	
	public void addSubscribe(Subscribe service) {
		subscribeRepository.save(service);
	}
	
	public void deleteSubscribe(Long id) {
		subscribeRepository.deleteById(id);
	}
	
}

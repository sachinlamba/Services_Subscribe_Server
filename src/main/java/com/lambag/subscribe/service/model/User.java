package com.lambag.subscribe.service.model;

import java.util.Set;

import javax.persistence.*;

@Entity
@Table(name = "USER")
public class User {
	@Id
	@GeneratedValue
	private Long id;
	private String username;
	private String password;
	
	@ManyToMany(fetch = FetchType.LAZY)
	private Set<Subscribe> subscribes;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Set<Subscribe> getSubscribes() {
		return subscribes;
	}

	public void setSubscribes(Set<Subscribe> subscribes) {
		this.subscribes = subscribes;
	}
	
}

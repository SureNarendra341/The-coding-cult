package com.in.contact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.in.contact.model.ContactInfo;

public interface ContactInfoRepository extends JpaRepository<ContactInfo, Integer> 
{
    ContactInfo findTopByOrderByIdAsc();
}

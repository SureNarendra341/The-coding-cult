package com.in.contact.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.in.contact.model.ContactForm;

public interface ContactFormRepository extends JpaRepository<ContactForm, Long>
{

}

<?php

namespace App\Serializer;

use Symfony\Component\Serializer\Exception\NotNormalizableValueException;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;
use Symfony\Component\Serializer\Normalizer\DateTimeNormalizer as SymfonyDateTimeNormalizer;

class DateTimeNormalizer implements NormalizerInterface, DenormalizerInterface
{
    private $dateTimeNormalizer;

    public function __construct(SymfonyDateTimeNormalizer $dateTimeNormalizer)
    {
        $this->dateTimeNormalizer = $dateTimeNormalizer;
    }

    public function supportsDenormalization($data, $type, $format = null)
    {
        return $this->dateTimeNormalizer->supportsDenormalization($data, $type, $format);
    }

    public function supportsNormalization($data, $format = null)
    {
        return $this->dateTimeNormalizer->supportsNormalization($data, $format);
    }

    public function denormalize($data, $class, $format = null, array $context = array())
    {
        if (null === $data || empty($data)) {
            return null;
        }

        try {
            return $this->dateTimeNormalizer->denormalize($data, $class, $format, $context);
        } catch (NotNormalizableValueException $notNormalizableValueException) {
            return $data;
        }
    }

    public function normalize($object, $format = null, array $context = array())
    {
        return $this->dateTimeNormalizer->normalize($object, $format, $context);
    }
}